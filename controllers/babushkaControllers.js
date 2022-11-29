const render = require('../lib/render');

const Babushkagram = require('../views/Babushkagram');
const BabushkaNewPhoto = require('../views/BabushkaNewPhoto');
const BabushkaPhotoEdit = require('../views/BabushkaPhotoEdit');
const BabushkaProfile = require('../views/BabushkaProfile');

const { Picture, 
    Grandparent 
} = require('../db/models');

exports.babushkagram = async (req, res) => {
    try {
        const pictures = await Picture.findAll({include: Grandparent})
        // console.log('pictures------------------', pictures[2])
        render(Babushkagram, { pictures }, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }

}

exports.babushkaNewPhoto = (req, res) => {
    render(BabushkaNewPhoto, {}, res);
}


exports.babushkaProfile = async (req, res) => {
    try {
        // const userid = req.session.user.id
        const userid = 1
        const user = await Picture.findAll({where: { grandparent_id: userid }, include: Grandparent });
        // console.log('user-------------------', user)
        render(BabushkaProfile, {}, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
}


exports.babushkaPhotoEdit = async (req, res) => {
    try {
        //req.params.id
        const picture = await Picture.findOne({where: {id: 3}})
        console.log('picture', picture)
        render(BabushkaPhotoEdit, {}, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
}

