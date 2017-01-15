/**
 * Created by calpaliu on 15/1/2017.
 */
let t = document.title;
let title ={
    focus: t,
    exit: 'TAT 不要離開我',
};

window.onblur = () => {
    // When the user is not focus in the page
    document.title = title.exit;
};

window.onfocus = () => {
    // Restore the original title
    document.title = title.focus;
};
