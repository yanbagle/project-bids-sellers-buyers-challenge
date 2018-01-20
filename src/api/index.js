import { version } from '../../package.json';
import { Router } from 'express';
import {Project} from '../models/Project';
import {Seller} from '../models/Seller';
import {getMockSellers} from '../mocks/mock-sellers';

var request = require('request');

export default ({ config, db }) => {
    let api = Router();

    let projects = [];
    const mockSellers = getMockSellers();

    // create project
    api.post('/project/', (req, res) => {
        // get seller by id
        const seller = mockSellers.find(seller => {
            return req.body.sellerId === seller.id;
        });
        if (seller) {
            // add the project to the seller's projects
            const project = new Project(req.body.name, req.body.desc, req.body.maxBudget, req.body.deadline, req.body.sellerId, req.body.id);
            seller.addProject(project);
            // add the project to the list of projects
            projects.push(project);
            res.json({status: 'success', projectId: projects[projects.length - 1].id});
        } else {
            res.json({status: 'failed', message: 'seller does not exist'});
        }

    });

    return api;
}
