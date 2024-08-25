import {db} from "../db.js";

export const getGarages = (_, res) => {
    const q = "SELECT * FROM garages";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
