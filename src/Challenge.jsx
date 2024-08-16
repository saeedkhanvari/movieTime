import { useState } from "react";

export default function Challenge() {
  return (
    <div>
      <TextExpander
        collapsedNumWords={4}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        expanded={true}
        className="box"
        collapsedNumWords={2}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children = "hi how are you",
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor,
  className,
  expanded = false,
}) {
  const paragraphLength = children.split(" ").length;
  const paragraphArray = children.split(" ");
  const [collapsed, setCollapsed] = useState(expanded);

  return (
    <>
      <div style={{ padding: "30px", fontSize: "20px" }} className={className}>
        {collapsed
          ? paragraphArray.slice(0, collapsedNumWords) + "..."
          : children}
      </div>
      <span>
        <button
          style={{ color: buttonColor }}
          onClick={() => setCollapsed((curr) => !curr)}
        >
          {collapsed ? expandButtonText : collapseButtonText}
        </button>
      </span>
      {/* <span>
        {collapsed ? (
          <button
            style={{ color: buttonColor }}
            onClick={() => {
              setCollapsed(false);
            }}
          >
            {expandButtonText}
          </button>
        ) : (
          <button
            type=""
            onClick={() => {
              setCollapsed(true);
            }}
          >
            {collapseButtonText}
          </button>
        )}
      </span> */}
    </>
  );
}
