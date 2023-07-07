import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="">Tesla Clone © 2023</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer