'use strict';

const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const { ceos } = require('../models');


router.get('/:slug?', async (req, res) => {
    if (!!req.params.slug) {
        const { slug } = req.params;
        const theCEO = await ceos.findOne({ where: { slug: slug }});
        console.log('THE CEO IS: ', theCEO);

        res.render('template', {
            locals: {
                title: 'CEO DETAILS',
                ceo: theCEO
            },
            partials: {
                body: 'partials/ceo-details'
            }
        });
    } else {
        const ExecutiveData = await ceos.findAll(); // reads the method from the ExecutivesModel 
        res.render('template', {
            locals: {
                title: 'Home Page',
                data: ExecutiveData
            },
            partials: {
                body: 'partials/home'
            }
        });
    }

});

router.post('/', async (req, res) => {
    // takes the request body and allows you to destructure 
    const { ceo_name, ceo_year } = req.body;

    const slug = slugify(ceo_name, {
        replacement: '_',
        lower: true,
        strict: true
    });

    const response = await ceos.create({
        name: ceo_name, 
        slug: slug,
        first_year_active: ceo_year
    });

    console.log('RESPONSE FROM CEO CREATE: ', response);
    res.redirect('/');
});

router.post('/delete', async (req, res) => {
    const {id, ceo_name, slug, ceo_year} = req.body;

    const response = await ceos.destroy({
        where: { id }
    });

    console.log('DELETE ROUTE RESPONSE: ', response);
    res.redirect('/');
});

module.exports = router;