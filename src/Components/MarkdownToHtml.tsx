import React from "react";

import { renderToString } from "react-dom/server";

interface MarkdownToHtmlProps {
  markdown: string;
  darkMode: boolean;
}

function MarkdownToHtml({ markdown, darkMode }: MarkdownToHtmlProps) {
  const markdownToHtml = (markdown: string) => {
    markdown = markdown.replace(
      /^(#{1})\s+(.*)$/gm,
      (_match, _hashes, heading) => {
        const className = `text-[32px] font-[700] leading-[42.2px] font-sans mb-[21px] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<h1 class="${className}">${heading.trim()}</h1>`;
      }
    );
    markdown = markdown.replace(
      /^(#{2})\s+(.*)$/gm,
      (_match, _hashes, heading) => {
        const className = `text-[28px] font-[400] leading-[36.93px] font-sans mb-[20px] mt-[21px] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<h2 class="${className}">${heading.trim()}</h2>`;
      }
    );
    markdown = markdown.replace(
      /^(#{3})\s+(.*)$/gm,
      (_match, _hashes, heading) => {
        const className = `text-[24px] font-[700] leading-[31.65px] font-sans mb-[20px] mt-[20px] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<h3 class="${className}">${heading.trim()}</h3>`;
      }
    );
    markdown = markdown.replace(
      /^(#{4})\s+(.*)$/gm,
      (_match, _hashes, heading) => {
        const className = `text-[20px] font-[700] leading-[26.38px] font-sans mb-[20px] mt-[20px] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<h4 class="${className}">${heading.trim()}</h4>`;
      }
    );
    markdown = markdown.replace(
      /^(#{5})\s+(.*)$/gm,
      (_match, _hashes, heading) => {
        const className = `text-[16px] font-[700] leading-[21.1x] font-sans mb-[20px] mt-[20px] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<h5 class="${className}">${heading.trim()}</h5>`;
      }
    );
    markdown = markdown.replace(
      /^(#{6})\s+(.*)$/gm,
      (_match, _hashes, heading) => {
        const className = `text-[14px] font-[700] leading-[18.46px] font-sans text-[#E46643] mb-[21px] mt-[20px] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<h6 class="${className}">${heading.trim()}</h6>`;
      }
    );

    markdown = markdown.replace(/```([\s\S]*?)```/g, (_match, codeBlock) => {
      const className = `text-[14px] font-[400] leading-[24px] font-mono w-fit p-[24px] mt-[20px] mb-[20px]   ${
        darkMode ? "text-[#FFF] bg-[#2B2D31]" : "text-[#35393F] bg-[#F5F5F5]"
      }`;
      return `<pre class="${className}"><code>${codeBlock.trim()}</code></pre>`;
    });

    markdown = markdown.replace(/`([^`]+)`/g, (_match, code) => {
      const className =
        "text-[14px] font-[400] leading-[24px] font-mono text-[#35393F]";
      return `<code class="${className}">${code}</code>`;
    });

    markdown = markdown.replace(/^\s*>\s+(.*)$/gm, (_match, quote) => {
      const className = `text-[14px] font-[700] leading-[24px] w-fit font-sans p-[24px] mt-[20px] border-l-[4px] border-[#E46643] rounded-md ${
        darkMode ? "text-[#FFF] bg-[#2B2D31]" : "bg-[#F5F5F5]"
      }`;
      return `<blockquote class="${className}">${quote}</blockquote>`;
    });

    markdown = markdown.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_match, text, url) => {
        const className = `underline text-[#35393fcc] ${
          darkMode ? "text-[#FFF]" : ""
        }`;
        return `<a class="${className}" href="${url}">${text}</a>`;
      }
    );

    markdown = markdown.replace(/^\s*-\s+(.*)$/gm, (_match, item) => {
      const className = `text-[14px] font-[400] leading-[24px] font-sans text-[#7C8187] ml-[24px] list-disc marker:text-[#E46643] ${
        darkMode ? "text-[#C1C4CB]" : ""
      }`;
      return `<li class="${className}">${item}</li>`;
    });

    markdown = markdown.replace(/^\d+\.\s+(.*)$/gm, (_match, listItem) => {
      const className = `list-decimal text-[14px] font-[400] leading-[24px] font-sans text-[#7C8187] ml-[24px] ${
        darkMode ? "text-[#C1C4CB]" : ""
      }`;
      return `<li class="${className}">${listItem}</li>`;
    });

    markdown = markdown.replace(
      /^\s*\d+\.\s+(.*)$/gm,
      (_match, item) => `<li>${item}</li>`
    );

    markdown = markdown.replace(/<\/ol>\s*<ol>/g, "");

    markdown = markdown.replace(
      /(^|\n)([^<\n]+?)(?=\n|$)/g,
      (_match, before, text) => {
        if (text.trim() === "") return before;
        const className = `text-[14px] font-[400] leading-[24px] font-sans w-fit pr-[24px] text-[#7C8187] ${
          darkMode ? "text-[#C1C4CB]" : ""
        }`;
        const styledText = text
          .split("\n")
          .map((line: string) => `<p class="${className}">${line.trim()}</p>`)
          .join("\n");
        return `${before}${styledText}`;
      }
    );

    markdown = markdown.replace(
      /\*\*(.*?)\*\*/g,
      (_match, text) => `<strong>${text}</strong>`
    );

    markdown = markdown.replace(
      /\*(.*?)\*/g,
      (_match, text) => `<em>${text}</em>`
    );

    markdown = markdown.replace(
      /~~(.*?)~~/g,
      (_match, text) => `<s>${text}</s>`
    );

    markdown = markdown.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      (_match, altText, imgUrl) => `<img src="${imgUrl}" alt="${altText}" />`
    );

    markdown = markdown.replace(/^---*$/gm, () => `<hr />`);

    return renderToString(
      React.createElement("div", {
        dangerouslySetInnerHTML: { __html: markdown },
      })
    );
  };

  return <div dangerouslySetInnerHTML={{ __html: markdownToHtml(markdown) }} />;
}

export default MarkdownToHtml;
