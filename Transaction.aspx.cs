using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.Security;
using System.Web.UI.WebControls;

namespace TAExchangeDesktop
{
    public partial class Transaction : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            /*
                    userID:"487f3303-041e-479f-9cc9-cc6e2e31c247",
                    tradeTypeID:"2",
                    orderTypeID:"2",
                    tickerSymbol:id,
                    quantity: 1987,
                    tradeStatusID: 1,
             */
            try{
                string qty = Request.QueryString["quantity"].ToString();
                //string uid = Request.QueryString["uid"].ToString();
                string tradeTypeID = Request.QueryString["tradeTypeID"].ToString();
                string orderTypeID = Request.QueryString["orderTypeID"].ToString();
                string tickerSymbol = Request.QueryString["tickerSymbol"].ToString();
                string tradeStatusID = Request.QueryString["tradeStatusID"].ToString();

                TAExchangeTradeEntities dbEntities = new TAExchangeTradeEntities();

                trade newTrade = new trade();

                MembershipUser user = Membership.GetUser();


                newTrade.quantity = Convert.ToInt32(qty);
                newTrade.userID = new Guid(user.ProviderUserKey.ToString());
                newTrade.tradeTypeID = Convert.ToInt32(tradeTypeID);
                newTrade.orderTypeID = Convert.ToInt32(orderTypeID);
                newTrade.tickerSymbol = tickerSymbol;
                newTrade.tradeStatusID = Convert.ToInt32(tradeStatusID);
                //newTrade.transactionID = 35;

                dbEntities.AddTotrades(newTrade);
                dbEntities.SaveChanges();
                output.Text = "Success";
            }
            catch (Exception ex)
            {
                output.Text = (ex.ToString());
            }
            //output.Text = Request.QueryString["quantity"].ToString(); 
        }
    }
}