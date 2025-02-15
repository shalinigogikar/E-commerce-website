import React from "react";
import { Container,Button,Table } from "react-bootstrap";
const Home = () => {
  const tourData = [
    { date: "JUL 16", location: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL 22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];
  return (
    <Container className="mt-5 text-center">
      <h2>Tours</h2>
  <Table>
      <tbody>
          {tourData.map((tour, index) => (
            <tr key={index}>
              <td>{tour.date}</td>
              <td>{tour.location}</td>
              <td>{tour.venue}</td>
              <td>
                <Button variant="primary">BUY TICKETS</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Home;