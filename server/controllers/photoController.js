const photosSchema = require("../models/Photo")

const getAllPhotos = async (req, res) => {
    const photos = await photosSchema.find()
    res.json(photos)
}

const getPhotoById = async (req, res) => {
    const { id } = req.params
    const photo = await photosSchema.findById(id)
    if (!photo) {
        return res.send("Not found")
    }
    res.send(photo)
}

const createPhoto = async (req, res) => {
    const { title, imageUrl} = req.body
    if (!imageUrl) {
        return res.send("imageUrl is require")
    }
    const photo = await photosSchema.create({title, imageUrl})
    res.json(photo)
}

const updatePhoto = async (req, res) => {
    const { id,title, imageUrl } = req.body
    if (!id || !imageUrl) {
        return res.send("id and imageUr are require")
    }
    const photo = await photosSchema.findById(id)
    if (!photo) {
        return res.send("Not found")
    }
    photo.title=title
    photo.imageUrl = imageUrl
    const newPhoto = await photo.save()
    res.json(newPhoto)
}

const deletePhoto = async (req, res) => {
    const { id } = req.params
    const photo = await photosSchema.findById(id)
    if (!photo) {
        return res.send("Not found")
    }
    await photo.deleteOne()
    res.send("success")
}

// const updatePhotoComplete = async (req, res) =>{
//     const {id} = req.params
//     const photo = await photosSchema.findById(id)
//     if (!photo) {
//         return res.send("Not found")
//     }
//     photo.complete = true
//     const newPhoto = await photo.save()
//     res.json(newPhoto)
// }

module.exports = { getAllPhotos, createPhoto, getPhotoById, updatePhoto, deletePhoto }