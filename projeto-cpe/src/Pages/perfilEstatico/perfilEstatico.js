/*import React, { useState } from "react";
import "./perfilEstatico.css";
import api from "../../services/api";


export default function StoresCarousel(props) {
const { users } = props;
return(
    {users?.length > 0 && users.map((user) => (
        <div className="maior">
            <div className="interior">
                <div className="menor">

                </div>
            </div>
        </div>

    )
)
 













export async function getServerSideProps() {
    const response = await api.get('user');
    const users = response.data;
    console.log(users);
    return { props: { users } };*/