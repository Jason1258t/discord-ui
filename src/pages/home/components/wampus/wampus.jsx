import React from "react";
import { ReactComponent as SadWampus } from "../../../../images/sad_wumpus.svg";

const Wampus = () => {
    return (
        <div
            style={{
                margin: "auto",
                color: "#949BA4",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "15px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            <SadWampus width={420} style={{ marginBottom: "24px" }} />
            Сообщаем вам что вы сын бляди, и с вами <br /> никто не хочет
            общаться
        </div>
    );
};

export default Wampus;
