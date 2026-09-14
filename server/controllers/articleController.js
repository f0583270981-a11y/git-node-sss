const Article = require("../models/Article")

const getAllArticles = async (req, res) => {
    const articles = await Article.find()
    res.json(articles)
}

const getArticleById = async (req, res) => {
    const { id } = req.params
    const article = await Article.findById(id)
    if (!article) {
        return res.send("Not found")
    }
    res.send(article)
}

const createArticle = async (req, res) => {
    const { title, body, aouthor } = req.body
    if (!title || !body) {
        return res.send("title is require")
    }
    const article = await Article.create({ title, body, aouthor })
    res.json(article)
}

const updateArticle= async (req, res) => {
    const { id, title, body, aouthor } = req.body
    if (!id || !title || !body) {
        return res.send("id and title and body are required")
    }
    const article = await Article.findById(id)
    if (!article) {
        return res.send("Not found")
    }
    article.title = title
    article.body = body
    article.aouthor = aouthor
    const newArticle = await article.save()
    res.json(newArticle)
}

const deleteArticle = async (req, res) => {
    const { id } = req.params
    const article = await Article.findById(id)
    if (!article) {
        return res.send("Not found")
    }
    await article.deleteOne()
    res.send("success")
}

// const updateArticleActive = async (req, res) =>{
//     const {id} = req.params
//     const article = await Article.findById(id)
//     if (!article) {
//         return res.send("Not found")
//     }
//     article.active = true
//     const newArticle = await article.save()
//     res.json(newArticle)
// }

module.exports={getAllArticles,getArticleById,createArticle,updateArticle,deleteArticle}