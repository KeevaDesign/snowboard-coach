import BookingForm from "../../components/BookingForm";
import "./classes.scss";

const Classes = () => {
  return (
    <>
      <header>
        <div className="header-banner"></div>
      </header>

      <main>
        <h1>Classes</h1>
        <p>
          Embrace the thrill of snowboarding during the winter season! I am
          available for classes throughout the Snow Season, spanning from
          November to March.
        </p>
        <p>
          Whether you're a beginner eager to make your first turns or an
          experienced rider looking to refine your skills, feel free to book a
          class with me.
        </p>
        <p>
          Let's embark on an exciting journey together on the snow-covered
          slopes!
        </p>
        <h2>See you on the mountain!</h2>

        {/* Class Desktop Version */}

        <div class="class-table-wrapper">
          <table class="class-table">
            <thead>
              <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              {/* ROW 1 */}
              <tr>
                <td>
                  <p>Morning Session</p>
                  <p>09:00 - 12:00</p>
                </td>
                <td></td>
                <td></td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td></td>
                <td></td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
              </tr>
              {/* ROW 2 */}
              <tr>
                <td>
                  <p>Afternoon Session</p>
                  <p>13:00 - 16:00</p>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
              </tr>
              {/* ROW 3 */}
              <tr>
                <td>
                  <p>Evening Session</p>
                  <p>17:00 - 20:00</p>
                </td>
                <td></td>
                <td></td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
                <td>
                  <i class="fas fa-snowboarding"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End of Class Desktop Version */}
      </main>
      <BookingForm />
    </>
  );
};

export default Classes;
