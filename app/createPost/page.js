import "./style.css";

export default function Page() {
  return (
    <div className="flex  justify-center">
      <div>
        <div class="input-group">
          <label className="pb-2 justify-center flex font-semibold">Title</label>
          <input autoFocus autocomplete="off" class="input-title"></input>
        </div>
        <div className="pt-20" class="input-group">
          <label className="pb-2 justify-center flex font-semibold">Content</label>
          <textarea autocomplete="off" class="input"></textarea>
        </div>
      </div>
    </div>
  );
}
