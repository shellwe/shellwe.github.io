import React from "react";
import Site from "./Site";
import Product from "./Product";

const Sites = (props) => {
  return (
    <>
      <Site
        title={"biBerk"}
        shortTItle={'biBerk'}
        phone={"iphone-right-biberk"}
        mac={"macbook-left-biberk"}
        description={<ul><li>Contributed to the Design System using Tailwind</li><li>Documented the Design System with Storybook creating interactive examples of components</li><li>Utilized Chromatic through storybook to help designers verify changes are accurate</li><li>Collaborated with several development teams that oversee each of the different products biBERK offers to achieve company goals </li><li>Used the Umbraco CMS powered by .NET 9 to allow employees of various skill level to contribute to the site</li><li>Focused on maintainign and optimizing the site using Google Tools to improve page speeds</li></ul>}>
        <h2><strong>Client:</strong> biBerk</h2>
        <p><strong>Site:</strong> <a href="https://www.biberk.com/" target="_blank" rel="noreferrer">https://www.biberk.com/</a></p>
        <strong>Technologies used:</strong><span className="products">
          <Product logoFile={'sass-icon'} logoText={'SASS'}></Product>
          <Product logoFile={'javascript-programming-language-icon'} logoText={'JavaScript'}></Product>
          <Product logoFile={'storybook-icon'} logoText={'Storybook'}></Product>
          <Product logoFile={'umbraco-icon'} logoText={'Umbraco'}></Product>
          <Product logoFile={'dotnet-icon'} logoText={'.NET'}></Product>
          <Product logoFile={'tailwind-icon'} logoText={'Tailwind'}></Product>
          </span>
          <br />
          <br />
        <strong>Programs used:</strong><span className="products">
          <Product logoFile={'visual-studio-code-icon'} logoText={'VS Code'}></Product>
          <Product logoFile={'figma-icon'} logoText={'Figma'}></Product>
          <Product logoFile={'chromatic-icon'} logoText={'Chromatic'}></Product>
          </span>
        <p><strong>Audience and Purpose:</strong> Designed for small and medium-sized business owners who need affordable and straightforward business insurance. Its purpose is to simplify buying coverage by offering a fully online process without middlemen, keeping costs lower. The company aims to give entrepreneurs peace of mind with customizable policies that protect against common business risks.</p>
      </Site>
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
        title={"Admissions"}
        shortTItle={'WhyNebraska'}
        phone={"iphone-right-whyneb"}
        mac={"macbook-left-whyneb"}
        description={<ul><li>Utilize creative uses for CSS Grid</li><li>Triggered animation and other events at certian scroll heights</li><li>Explored animation and how it affects accessibility</li><li>2-column layout for subpages was incredibly complex and required careful coding practices to prevent it from breaking</li><li>Had to manage multiple viewports and make sure content lays out well</li><li>Colaborated with designer to improve the design.</li><li>Reduced page load size by utilizing picture tag to have multiple images in different sizes/formats</li></ul>}>
        <h2><strong>Client:</strong> University of Nebraska–Lincoln</h2>
        <p><strong>Site:</strong> <a href="https://admissions.unl.edu/" target="_blank" rel="noreferrer">https://admissions.unl.edu/</a></p>
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
        <p><strong>Audience and Purpose:</strong> High school students determining if college was right for them. Overview: We used nationally sourced data to break down most students in 3 categories: career focused, grad school focused, and social focused. We used this to make 3 similar sites to cater to each category.</p>
      </Site>
    </>
  );
};

export default Sites;
