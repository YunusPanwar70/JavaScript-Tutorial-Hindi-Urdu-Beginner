let ary = [
  ["Yunus", 18, "Male", "BCA"],
  ["Aman", 17, "Male", "Commers"],
  ["Lukman", 19, "Male", "BCA 2"],
  ["Masum", 20, "Male", "Work"],
];

document.write("<table border='1px'>");

for (let a = 0; a < ary.length; a++) {
  document.write("<tr>");

  for (let b = 0; b < ary[a].length; b++) {
    document.write("<td>" + ary[a][b] + "</td>");
  }

  document.write("</tr>");
}

document.write("</table>");
