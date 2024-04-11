import "./style.css";

export default function Page() {
  return (
    <div className="flex  justify-center">
      <div>
        <div class="input-group">
          <label className="text-center justify-center flex font-semibold ">
            Title
          </label>
          <input autoFocus autocComplete="off" class="input" />
        </div>
        <div class="input-group">
          <label className="text-center justify-center flex font-semibold ">
            Content
          </label>
          <input autoComplete="off" class="input" />
        </div>
      </div>
    </div>
  );
}
