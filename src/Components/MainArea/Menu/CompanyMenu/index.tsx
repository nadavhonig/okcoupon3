import { Button } from "@mui/material";
import { RouteComponentProps, useHistory } from "react-router-dom";

function CompanyMenu({ match }: RouteComponentProps) {
  const history = useHistory();

  return (
    <>
    <br />
      <Button  variant="contained" size="medium" onClick={() => {
          history.push(`${match.url}/home`);
          window.location.reload();
        }}
      >
        Home
      </Button>
      &nbsp;
      <Button variant="outlined" size="small" onClick={() => {
          history.push(`${match.url}/allCoupons`);
        }}
      >
        Watch Your Coupons
      </Button>
      &nbsp;
      <Button variant="outlined" size="small" onClick={() => {
          history.push(`${match.url}/newCoupon`);
        }}
      >
        Add Coupon
      </Button>
      &nbsp;
      <Button variant="outlined" size="small" onClick={() => {
          history.push(`${match.url}/updateCoupon`);
        }}
      >
        Update Coupon
      </Button>
      &nbsp;
      <Button variant="outlined" size="small" onClick={() => {
          history.push(`${match.url}/companyDetails`);
        }}
      >
        Company Details
      </Button>
      &nbsp;
      <Button variant="outlined" size="small" onClick={() => {
          history.push(`${match.url}/deleteCoupon`);
        }}
      >
        Delete Coupon
      </Button>
    </>
  );
}

export default CompanyMenu;
