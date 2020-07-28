var root = document.body;

var form_input = [
  m(
    "form.form-group",
    {
      action: "/",
      method: "post",
      enctype: "multipart/form-data",
    },
    [
      m("label.control-label", "Upload file"),
      m("br"),
      m("input[type=file]", { name: "file-to-upload" }),
      m("br"),
      m("br"),
      m("input[type=submit].btn btn-success"),
    ]
  ),
];

m.render(root, form_input);
