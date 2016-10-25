import React from 'react';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';

export const Venue = () => (
  <Grid>
    <section className="room">
      <a name="room" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Room</h1>
      </Col></Row>
      <Row>
        <Col sm={12} md={4}>
          <h2 className="section-subheader"> Zaffiro </h2>
          <p> Tower Center 3F (80석)</p>
          <img className="img-responsive" src="/img/zaffiro.jpg" alt="" />
        </Col>
        <Col sm={12} md={4}>
          <h2 className="section-subheader"> Rubino </h2>
          <p> Tower Center 3F (13석) </p>
          <img className="img-responsive" src="/img/rubino.jpg" alt="" />
        </Col>
        <Col sm={12} md={4}>
          <h2 className="section-subheader"> Granato </h2>
          <p> Tower Center 2F (60석)</p>
          <img className="img-responsive" src="/img/granato.jpg" alt="" />
        </Col>
      </Row>
    </section>
    <section className="accommodation">
      <a name="accommodation" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Accommodation</h1>
      </Col></Row>
      <Row>
        <Col md={6}>
          <img className="img-responsive" src="/img/venue.jpg" alt="" />
        </Col>
        <Col md={6}>
          <h2 className="section-subheader">대명리조트 쏘노펠리체</h2>
          <ul>
            <li> 노블리안 실버스위트 (1객실당 방2개, 거실1개) </li>
            <li>Daemyung Resort, Sonofelice, Noblian Sliver Suite (2 rooms &amp; 1 living room / 1Unit)</li>
            <li>숙박 및 콘도가격은 사무국으로 문의해주세요. (a3inverse@gmail.com)</li>
          </ul>
          <h3 className="section-subsubheader">Homepage</h3>
          <ButtonToolbar>
            <Button href="https://www.daemyungresort.com">Korean</Button>
            <Button href="https://www.daemyungresort.com/daemyung.front.foreign.main.main.ds/dmparse.dm">English</Button>
            <Button href="https://www.daemyungresort.com/daemyung.front.foreign.chn.main.main.ds/dmparse.dm">China</Button>
            <Button href="https://www.daemyungresort.com/daemyung.front.foreign.jpn.main.main.ds/dmparse.dm">Japan</Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </section>
    <section className="Transportation">
      <a name="travel" className="anchor"></a>
      <Row><Col xs={12}>
        <h1 className="section-header">Travel &amp; Transportation</h1>
      </Col></Row>
      <Row><Col xs={12}>
        <h2 className="section-subheader">Travel</h2>
        <p>Questions about the Visa Invitation Letter application process, e-mail: a3inverse@gmail.com - 추후공지</p>
      </Col></Row>
      <Row><Col xs={12}>
        <h2 className="section-subheader">Transportation</h2>
        <p>How to get to Sonofelice (Daemyung Resort, Vivaldi Park)- 추후공지</p>
        <ButtonToolbar>
          <Button href="http://www.daemyungresort.com/daemyung.front.saupjang.yangpyung.resort_way_map.ds/dmparse.dm?menuNo=04">Korean</Button>
          <Button href="http://www.daemyungresort.com/web/dm_english/html/01vivaldi_english_sub_10.html">English</Button>
          <Button href="http://www.daemyungresort.com/web/dm_china/html/01vivaldi_china_sub_10.html">China</Button>
          <Button href="http://www.daemyungresort.com/web/dm_japan/html/01vivaldi_japan_sub_10.html">Japan</Button>
        </ButtonToolbar>
      </Col></Row>
    </section>
  </Grid>
)
