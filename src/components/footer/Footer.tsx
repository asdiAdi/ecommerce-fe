import TableIcon from "@/components/core/TableIcon";
import { FACEBOOK_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants/links";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 grid-rows-2 sm:grid-cols-none sm:grid-rows-none sm:flex sm:justify-evenly items-start daisy-footer bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="daisy-footer-title">About Us</h6>
        <a className="daisy-link daisy-link-hover">Careers</a>
        <a className="daisy-link daisy-link-hover">Our Stores</a>
        <a className="daisy-link daisy-link-hover">Our Cares</a>
        <a className="daisy-link daisy-link-hover">Terms & Conditions</a>
      </nav>
      <nav>
        <h6 className="daisy-footer-title">Customer Care</h6>
        <a className="daisy-link daisy-link-hover">Track Your Order</a>
        <a className="daisy-link daisy-link-hover">
          Corporate & Bulk Purchasing
        </a>
        <a className="daisy-link daisy-link-hover">Returns & Refunds</a>
      </nav>
      <nav>
        <h6 className="daisy-footer-title">Contact Us</h6>
        <a className="daisy-link daisy-link-hover">Terms of use</a>
        <span>
          Email:{" "}
          <a
            href="mailto:carltimothyadi@gmail.com"
            className="daisy-link daisy-link-hover"
          >
            carltimothyadi@gmail.com
          </a>
        </span>
        <span>
          Phone:{" "}
          <a
            href="tel:(+63) 9495644910"
            className="daisy-link daisy-link-hover"
          >
            (+63) 9495644910
          </a>
        </span>
      </nav>

      <nav>
        <h6 className="daisy-footer-title">Social</h6>
        <div className="grid grid-flow-col gap-2">
          <a target="_blank" rel="noreferrer" href={LINKEDIN_URL}>
            <TableIcon
              name="linkedin-filled"
              size="lg"
              className="p-0 cursor-pointer"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={GITHUB_URL}>
            <TableIcon
              name="github-filled"
              size="lg"
              className="p-0 cursor-pointer"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={FACEBOOK_URL}>
            <TableIcon
              name="facebook-filled"
              size="lg"
              className="p-0 cursor-pointer"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}
