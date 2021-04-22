import mongoose from 'mongoose';

const DelinquentCustomerSchema = new mongoose.Schema({
    name: String,
    value: Number,
    delinquent_since: Date
});

export default mongoose.model("Delinquents", DelinquentCustomerSchema);
