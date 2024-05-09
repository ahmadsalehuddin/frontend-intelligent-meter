export default function Inventory() {
  return (
    <div className="h-[calc(100vh-7rem)]">
      <h1>Meter Inventory</h1>
      <p>Manage water meter inventory all in one place</p>

      <table className="block w-full overflow-x-auto">
        <tr>
          <th>Meter Serial</th>
          <th>Meter Age</th>
          <th>Warranty Status</th>
          <th>Manufacturer</th>
          <th>Meter Owner</th>
          <th>Region</th>
          <th>Tracking Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>M1001</td>
          <td>18 months</td>
          <td>Active</td>
          <td>George Kent</td>
          <td>
            <a href="#" className="text-blue-400">
              Jimmy Ting
            </a>
          </td>
          <td>Petaling Jaya</td>
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
