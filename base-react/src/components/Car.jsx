const myElement = (
    <table>
        <thead>
            <tr>
                <th>Marchio Auto</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fiat {450 + 150}</td>
            </tr>
            <tr>
                <td>Tesla Model Y</td>
            </tr>
        </tbody>
    </table>
)

function Car() {
    return <h1>{myElement}</h1>;
}

export default Car