import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import PageHeader from "../../app/layout/PageHeader";


// Page Components
// ----------------------------------------------------------------------------

function RecentActivityCard() {
  // query params
  const isRecent = true;

  // Dispatch
  const dispatch = useDispatch();

  useEffect(() => { }, [dispatch]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">Recent Activity</h5>
      </div>
    </div>
  );
}

function QuickAccessLinksCard() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Quick Access</h5>

          <ul className="mt-4 list-unstyled">
            <li className=""></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

/**
 * Page
 */
export default function DashboardPage() {
  // Dispatch
  const dispatch = useDispatch();

  // Get Logged in User Info

  return (
    <>
      <PageHeader title={"Welcome USER !!!"} />

      {/* Page Content */}
      <div className="page-content">
        <div className="row">
          <div className="col-9">
            {/* Recent Activity */}
            <RecentActivityCard />
          </div>
          <div className="col-3">
            {/* Quick Access */}
            <QuickAccessLinksCard />
          </div>
        </div>
      </div>
    </>
  );
}
