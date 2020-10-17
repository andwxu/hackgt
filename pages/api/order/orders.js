import authorize from "../../../sheets/auth";
import {newOrder} from "../../../sheets/sheets";

export default function handler(req, res) {
    let AUTH = authorize()
        .then((auth) => {
            AUTH = auth;;
            let orderInfo = req.body;
            newOrder(AUTH, orderInfo).then( () => {
                res.status(200).json({message: "success!"})
            })
            .catch( (err) => {
                res.send(err);
            });
        })
        .catch((err) => {
            res.status(400);
            console.log(err);
        });
}