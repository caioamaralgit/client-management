import { Request, Response } from 'express';

import CustomerService from '../services/CustomerService';

class CustomersController {
    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    async delinquents(request: Request, response: Response) {
        const { search, order, criteria } = request.query;

        const sort: {
            [key: string] : string
        } = {};

        if (order && ["name", "value", "delinquent_since"].includes(order?.toString())) {
            sort[order.toString()] = criteria?.toString().toLowerCase() === "desc" ? "desc" : "asc";
        }

        const delinquentUsers = await this.customerService.findDelinquentCustomers(search?.toString(), sort);

        return response.json(delinquentUsers);
    }
}

export default CustomersController;
 