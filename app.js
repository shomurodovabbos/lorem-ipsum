const text = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
  `Vivamus ac diam vel augue pulvinar mattis. Phasellus in ligula turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat diam ut turpis feugiat, ac viverra erat tempus. Donec suscipit justo quis venenatis porttitor. Cras id nisl vel libero elementum cursus sit amet in lacus. Nulla quis eleifend velit, vel tempus est. Proin pretium nisl et vehicula vehicula. Suspendisse ut vulputate massa, eget imperdiet magna. Nunc pretium est ut vestibulum tempor.`,
  `In egestas, dui eu egestas pellentesque, ipsum nisi finibus metus, at egestas lectus est eu elit. Nunc eget cursus purus. Integer at velit odio. Nulla ullamcorper risus non dignissim viverra. Aliquam erat volutpat. Etiam non tortor molestie, elementum erat egestas, molestie dolor. Etiam eleifend tincidunt tempus. Vestibulum sollicitudin dapibus lobortis. Vivamus dui felis, ultricies ut ex sed, scelerisque aliquet est. Donec sodales gravida est sit amet venenatis. Sed ut magna gravida, hendrerit mi ac, hendrerit urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium, orci in vestibulum interdum, felis tellus lobortis tortor, ut feugiat nisi mauris a magna. Cras ultricies volutpat pulvinar.`,
  `Cras cursus orci et posuere suscipit. Etiam sagittis posuere rhoncus. Quisque vitae dui non odio vulputate elementum sed sed elit. Vivamus interdum nunc at elementum molestie. Suspendisse cursus, dui rutrum condimentum sollicitudin, eros dui varius felis, eu auctor erat lorem pretium eros. Aenean non ante id nisi gravida efficitur. In ac lacus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vel augue eget risus gravida consectetur a quis tortor. Vivamus hendrerit ullamcorper efficitur.`,
  `Vivamus dapibus nibh non risus sagittis semper. Vestibulum gravida mattis aliquam. Nulla eu velit quis sapien fringilla pharetra in vitae mauris. Phasellus posuere vehicula nisi. Donec lacinia vehicula aliquet. Fusce ligula urna, maximus eu pellentesque non, ultrices finibus diam. Aliquam ut semper erat. Nunc rhoncus porta mauris, ut rutrum lectus egestas ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vehicula, risus vel ultricies tincidunt, augue lacus facilisis nulla, ac varius diam lorem sed nulla. Phasellus finibus scelerisque convallis. Maecenas lacinia purus nisi, id dictum lectus porttitor sit amet. Pellentesque ligula nulla, dapibus a arcu eu, ornare varius ligula.`,
];

const form = document.getElementById("form");
const input = document.querySelector(".input");
let result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = parseInt(input.value);
  if (isNaN(amount) || amount < 0 || amount > text.length) {
    const random = Math.floor(Math.random() * text.length);
    return (result.innerHTML = `<p>${text[random]}</p>`);
  } else {
    let tempText = text.slice(0, amount);
    tempText = tempText
      .map(function (item) {
        return `<p>${item}</p>`;
        // return (result.innerHTML = `<p>${item}</p>`);
      })
      .join("");
    result.innerHTML = tempText;
  }
});
