import { useState, useRef } from "react";
import MarkdownToHtml from "../MarkdownToHtml";
import useSynchronizedScroll from "../useSynchronizedScroll";

function Editor() {
  const [markdown, setMarkdown] = useState<string>(initialText);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useSynchronizedScroll(editorRef, previewRef);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-1/2 h-full">
        <h1 className="fixed text-[14px] font-[500] w-1/2 text-[#7C8187] font-sans pl-[16px] py-[14px] leading-[16.41px] tracking-[2px] bg-[#F5F5F5] z-10">
          MARKDOWN
        </h1>
        <textarea
          className="text-[14px] leading-[24px] font-[400] font-mono mt-[40px] w-full h-full p-[20px] overflow-auto resize-none outline-none custom-scrollbar"
          autoFocus
          value={markdown}
          name="textarea"
          onChange={(e) => setMarkdown(e.target.value)}
          ref={editorRef}
        ></textarea>
      </div>
      <span className="h-full w-[1px] bg-[#E4E4E4] z-20"></span>
      <div className="flex flex-col w-1/2 h-full">
        <h1 className="fixed text-[14px] font-[500] w-1/2 text-[#7C8187] font-sans pl-[16px] py-[14px] leading-[16.41px] tracking-[2px] bg-[#F5F5F5] z-10">
          PREVIEW
        </h1>
        <div
          ref={previewRef}
          className="w-full h-full p-[20px] overflow-auto mt-[40px] custom-scrollbar"
        >
          <MarkdownToHtml markdown={markdown} />
        </div>
      </div>
    </div>
  );
}

export default Editor;

const initialText = `# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor allows for inline-code snippets, like this: \`< p>I'm inline< /p>\`. It also allows for larger code blocks like this:

\`\`\`
 < main>
  < h1>This is a larger code block< /h1>
< /main>
\`\`\` `;
