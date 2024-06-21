import MultiRootEditor from "@ckeditor/ckeditor5-editor-multi-root/src/multirooteditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import { Bold } from "@ckeditor/ckeditor5-basic-styles";

import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import { Heading } from "@ckeditor/ckeditor5-heading";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKBox from "@ckeditor/ckeditor5-ckbox/src/ckbox";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import PictureEditing from "@ckeditor/ckeditor5-image/src/pictureediting";

MultiRootEditor.builtinPlugins = [
  Essentials,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  CloudServices,
  Bold,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
  Italic,
  Paragraph,
  Alignment,
  Heading,
  CKFinderUploadAdapter,
  Autoformat,
  BlockQuote,
  CKBox,
  CKFinder,
  EasyImage,
  Indent,
  Link,
  List,
  MediaEmbed,
];

MultiRootEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "alignment",
    ],
  },

  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },

  language: "en",
};

export default MultiRootEditor;
