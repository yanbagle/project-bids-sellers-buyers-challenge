import { version } from '../../package.json';
import { Router } from 'express';
import {Project} from '../models/Project';
import {Bid} from '../models/Bid';
import {getMockSellers} from '../mocks/mock-sellers';
import {Timer} from '../util/Timer';

var request = require('request');

export default ({ config, db }) => {
    let api = Router();

    // storing our created projects in our array
    let projects = [];

    // timer is for closing out projects that is past its deadline
    const timer = new Timer();
    timer.closeProjects(projects);

    // setting up our mock sellers
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
            res.json({status: 'success', project: projects[projects.length - 1]});
        } else {
            res.json({status: 'failed', message: 'seller does not exist'});
        }

    });

    // get project by id
    api.get('/project/:id', (req, res) => {
        // find project in our array
        const project = projects.find(project => {
            return project.id === req.params.id;
        });
        if (project) {
            res.json({status: 'success', project: project});
        } else {
            res.json({status: 'failed', message: 'project does not exist'});
        }
    });

    // bid for project
    api.post('/bid/', (req, res) => {
        // find the project in which the bid is for
        const project = projects.find(project => {
            return project.id === req.body.projectId;
        });
        if (project) {
            // in the project, add the new bid to the bids array
            project.bids.push(new Bid(req.body.amount, req.body.buyerId, req.body.projectId, req.body.id));
            // calculate the lowest bid so far
            const lowestBidSoFar = project.getLowestBid();
            res.json({status: 'success', bid: project.bids[project.bids.length - 1], lowestBidSoFar: lowestBidSoFar});
        } else {
            res.json({status: 'failed', message: 'project does not exist'});
        }
    });

    // bid for project
    api.get('/projects/open', (req, res) => {
        // filter projects by open status
        let openProjects = projects.filter((project) => {
            return project.open;
        });
        res.json({status: 'success', projects: openProjects});
    });

    return api;
}
