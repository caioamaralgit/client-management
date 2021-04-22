import DelinquentCustomers from '../models/DelinquentCustomers';

class CustomerService {
    findDelinquentCustomers(search?: string, sort: {[key: string] : string} = { name: "desc"}) {
        return DelinquentCustomers
            .find({"name": { "$regex": search || "", "$options": 1 }})
            .sort(sort)
            .select({
                name: 1,
                value: 1,
                delinquent_since: 1,
                _id: 0
            });
    }
}

export default CustomerService;
