export default function Inventory() {
    const meters = [{
        meter_serial: "M0001",
        region: "Petaling Jaya",
        owner: "Unassigned",
        purchase_date: "4 May 2024",
        purchase_time: "7:15PM",
        person_in_charge: "Danial Azmi",
        // warranty_status: "Active", This will be shown
        warranty_expiration: "4 May 2026",
        manufacturer: "George Kent",
        tracking_status: "Processing"
        //   <th>Installed By</th>
        //   <th>Tracking Status</th>
    }];

    return (
    <div className="h-[calc(100vh-7rem)]">
      <h1>Meter Inventory</h1>
      <p>Manage water meter inventory all in one place</p>

      <table className="block w-full overflow-x-auto">
        <tr>
          <th>Meter Serial</th>
          <th>Purchase Date</th>
          <th>Purchase Time</th>
          <th>Warranty Period</th>
          <th>Warranty Status</th>
          <th>Manufacturer</th>
          <th>Region</th>
          <th>PIC</th>
          <th>Installed By</th>
          <th>Tracking Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>M1001</td>
          <td>{meters[0].purchase_date}</td>
          <td>7:15PM</td>
          <td>24 months</td>
          <td>Active</td>
          <td>George Kent</td>
          <td>Petaling Jaya</td>
          <td>Danial Azmi</td>
          <td>Jimmy Ting</td>
          <td>
            <a href="#" className="text-blue-400">
              Processing
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
