import React from 'react';

const Tournament = () => {
    return (
        <div className="tournaments" id="tournaments">
            <h1>Tournament Schedule</h1>
            <table>
                <tr>
                    <th>Match</th>
                    <th>Entrants</th>
                    <th>Time</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>1st Semi Final</td>
                    <td>Jiang Li <br/> VS <br/> Lucy Smith </td>
                    <td>12:00PM</td>
                    <td>22/08/24</td>
                </tr>
                <tr>
                    <td>2nd Semi Final</td>
                    <td>Anny Winters <br/> VS <br/> Johnny Wen</td>
                    <td>03:00PM</td>
                    <td>23/08/24</td>
                </tr>
            </table>
        </div>
    );
};

export default Tournament;