const User = require("../models/User.js");
const model = require("../config/aiconfig.js"); // Import the configured model

const generateChatCompletion = async (req, res, next) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    // Grab chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    }));

    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // Create a prompt for Google Gemini AI
    const prompt = chats
      .map((chat) => `${chat.role}: ${chat.content}`)
      .join("\n");

    // Send the prompt to Google Gemini AI API
    const chatResponse = await model.generateContent(prompt);

    const generatedMessage = await chatResponse.response.text();
    user.chats.push({ content: generatedMessage, role: "assistant" });
    await user.save();

    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.error("Error generating chat completion:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const sendChatsToUser = async (req, res, next) => {
  try {
    // User token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.error("Error sending chats to user:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteChats = async (req, res, next) => {
  try {
    // User token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

module.exports = { generateChatCompletion, sendChatsToUser, deleteChats };
