import React from "react";
import Site from "./Site";
import Product from "./Product";

const Sites = (props) => {
  return (
    <>
      <Site
        title={"CoCreate"}
        shortTItle={'CoCreate'}
        phone={"iphone-left-cocreate"}
        mac={"imac-right-cocreate"}
        description={<ul><li>Utilized Lighthouse and internal audit tools to increase site performance and validation</li><li>Utilized Drupal to increase the user base who can edit content</li><li>Broke down a complex site to create managable and testable segments</li><li>Site needed to be versatile to support different content layouts</li><li>Had to build the site in a way that would allow expansion and new features without breaking existing content</li><li>Worked with University Communications (UComm) to improve brand expression</li><li>Set up GIt repository so UComm could collaborate on SCSS and JS changes with our department seamlessly</li></ul>}>
        <h2><strong>Client:</strong> University of Nebraska–Lincoln</h2>
        <p><strong>Site:</strong> <a href="https://web.archive.org/web/20221204185256/https://cocreate.unl.edu/" target="_blank" rel="noreferrer">https://cocreate.unl.edu/</a> (site no longer active)</p>
        <strong>Technologies used:</strong><span className="products">
          <Product logoFile={'sass-icon'} logoText={'SASS'}></Product>
          <Product logoFile={'javascript-programming-language-icon'} logoText={'JavaScript'}></Product>
          <Product logoFile={'jquery-icon'} logoText={'Jquery'}></Product>
          <Product logoFile={'drupal-icon'} logoText={'Drupal'}></Product>
          </span>
          <br />
          <br />
        <strong>Programs used:</strong><span className="products">
          <Product logoFile={'adobe-illustrator-icon'} logoText={'Adobe Illustrator'}></Product>
          <Product logoFile={'adobe-photoshop-icon'} logoText={'Adobe Photoshop'}></Product>
          <Product logoFile={'adobe-xd-icon'} logoText={'Adobe XD'}></Product>
          </span>
        <p><strong>Audience and Purpose:</strong> CoCreate is a student magazine that focuses on the achievements of noteworthy students at the University of Nebraska. It is designed to make the student the hero of their own story and show how you can have your own story at the University of Nebraska. There is a request for more info on each page.</p>
      </Site>
      <Site
        title={"Why Nebraska"}
        shortTItle={'WhyNebraska'}
        phone={"iphone-right-whyneb"}
        mac={"macbook-left-whyneb"}
        description={<ul><li>Utilize creative uses for CSS Grid</li><li>Triggered animation and other events at certian scroll heights</li><li>Explored animation and how it affects accessibility</li><li>2-column layout for subpages was incredibly complex and required careful coding practices to prevent it from breaking</li><li>Had to manage multiple viewports and make sure content lays out well</li><li>Colaborated with designer to improve the design.</li><li>Reduced page load size by utilizing picture tag to have multiple images in different sizes/formats</li></ul>}>
        <h2><strong>Client:</strong> University of Nebraska–Lincoln</h2>
        <p><strong>Site:</strong> <a href="https://admissions.unl.edu/why-nebraska/" target="_blank" rel="noreferrer">https://admissions.unl.edu/why-nebraska/</a></p>
        <strong>Technologies used:</strong><span className="products">
        <Product logoFile={'sass-icon'} logoText={'SASS'}></Product>
        <Product logoFile={'javascript-programming-language-icon'} logoText={'JavaScript'}></Product>
        <Product logoFile={'jquery-icon'} logoText={'Jquery'}></Product>
        <Product logoFile={'dotnet-icon'} logoText={'.NET'}></Product>
        </span>
        <br />
        <br />
        <strong>Programs used:</strong><span className="products">
          <Product logoFile={'adobe-illustrator-icon'} logoText={'Adobe Illustrator'}></Product>
          <Product logoFile={'adobe-photoshop-icon'} logoText={'Adobe Photoshop'}></Product>
          <Product logoFile={'adobe-xd-icon'} logoText={'Adobe XD'}></Product>
          <Product logoFile={'visual-studio-code-icon'} logoText={'Visual Studio Professional'}></Product>
          </span>
        <p><strong>Audience and Purpose:</strong> High school students determining if college was right for them. Overview: We used nationally sourced data to break down most students in 3 categories: career focused, grad school focused, and social focused. We used this to make 3 similar sites to cater to each category. We also pulled from social media and our Cocreate Newsletter to show what active students are doing.</p>
      </Site>
    </>
  );
};

export default Sites;
