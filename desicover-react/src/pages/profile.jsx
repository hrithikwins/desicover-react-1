const Profile = (props) => {
    return (
        <>
            <div id="container" className="w-100 bg-warning">
                <div id="leftCol">
                    <div id="leftColHeader">
                        <h1>
                            My Wallets
                            <span className="leftColPlus" id="myBtn">
                                <img
                                    style={{ width: "100px" }}
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finnovationsoftheworld.com%2Findia%2Fwp-content%2Fuploads%2Fsites%2F4%2F2019%2F03%2Frzp-logo-positive.png&f=1&nofb=1"
                                    alt="Wallet"
                                />
                            </span>
                        </h1>
                    </div>
                    <div id="leftColContent">
                        {/* <!--
      <div className="cardBox active">
        <img src="amex.png">
        <p className="cardNumber">8888 8888 8888 8888</p>
        <p className="cardDate">Valid Thru: 12/19</p>
      </div> --> */}
                    </div>
                </div>

                <div id="rightCol">
                    <div id="rightColHeader">
                        <h1>
                            Current Balance
                            <span className="balanceAmount" id="balanceAmount">
                                ₹ 750.<sup>00</sup>
                            </span>
                        </h1>
                        <p className="currentCard"></p>
                        <select className="forMobile" id="forMobile">
                            <option>Choose a card...</option>
                        </select>
                        <hr />
                    </div>
                    <div id="rightColContent">
                        <div id="entryBox">
                            <div className="transType">
                                <img
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fCityjyEEq8aYaQD58obggHaF9%26pid%3DApi&f=1"
                                    alt="plus"
                                />
                            </div>
                            <div className="transaction">
                                <p className="lineItem">Apple iPhone 6 Cover</p>
                                <p className="itemDetails">Classic Black</p>
                            </div>
                            <div className="dollarsDebit">
                                <p>
                                    ₹ 900.<sup>00</sup>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <h3>Add A New Card</h3>

                    <label for="cardtype">Card Type</label>
                    <select name="cardtype" id="cardtype">
                        <option value="MasterCard">MasterCard</option>
                        <option value="Visa">Visa</option>
                        <option value="AMEX">AMEX</option>
                    </select>
                    <label for="cardnumber">Card Number</label>
                    <input type="text" name="cardnumber" id="cardnumber" />
                    <label for="carddate">Card Expiration Date</label>
                    <input type="text" name="carddate" id="carddate" />
                    <button id="modalbutton">Add Card</button>
                </div>
            </div>
            {/*
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="modal.js"></script> */}
        </>
    );
};
export default Profile;
