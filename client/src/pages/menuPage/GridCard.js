import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";
import { MenuDescriptionStyle } from "./menuStyles";

function GridCards(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style={{position: "relative"}}>
                <Link
                    to={{
                        pathname: `/menu/${props.menuId}`,
                        state: {
                            title: props.title,
                        },
                    }}
                >
                    <img
                        style={{width: "100%", height: "300px"}}

                        src={props.image}
                        alt={props.title}
                    />
                </Link>
            </div>
            <MenuDescriptionStyle>
                <h3>{props.name}</h3>
                <h4>{props.price + "원"}</h4>

            </MenuDescriptionStyle>
        </Col>
    );
}

export default GridCards;