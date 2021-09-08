const run = Pts.quickStart("#pt");
const img = Img.load("face.jpg");

run((t) => {
  let scale = 2;

  const ratio = img.image.height / space.height;
  const change = ratio * scale;
  //   let foo = space.pointer;
  //   let foo = [
  //     [0, 0],
  //     [img.image.width / ratio, img.image.height / ratio],
  //   ];
  let foo = [
    space.pointer,
    [
      space.pointer.x + img.image.width / change,
      space.pointer.y + img.image.height / change,
    ],
  ];
  form.image(foo, img);
});
