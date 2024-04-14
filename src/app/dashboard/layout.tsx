import Notifications from "./@notifications/page";
import Profile from "./@profile/page";
import Sidebar from "./@sidebar/page";

export default function NewDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="leftside">
      <Sidebar />
      <Notifications/>

        <div className="box">
        <div> {children}</div>
        </div>
       
        <div className="rightside">
          <Profile />
        </div>
      </div>
    </>
  );
}
