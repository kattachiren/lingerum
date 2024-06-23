import Link from "next/link";

const ReferencePage = () => {
  return (
    <div>
      <h1 className="mb-3 mt-3 text-2xl font-extrabold tracking-wide text-purple-600">
        Справка
      </h1>
      <div className="hidden h-2 w-full border-t-2 border-slate-200 p-2 lg:block"></div>
      <div className="w-[950px] text-xl">
        Добро пожаловать в наш раздел «Справка». Здесь вы найдете ответы на
        часто задаваемые вопросы и полезные советы по использованию нашего
        приложения.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        1. Как начать использовать приложение?
      </h2>
      <div className="w-[950px] text-xl">
        • Зарегистрируйтесь, создав новый аккаунт или войдите в систему,
        используя свои учетные данные.
        <br></br>
        <br></br>• Выберите первое задание и попытайтесь его выполнить, в случае
        неудачи, изучите теорию, прикреплённую к разделу с этим заданием.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        2. Как работают уровни и очки?
      </h2>
      <div className="w-[950px] text-xl">
        • Вы зарабатываете очки за выполнение уроков и упражнений. <br></br>
        <br></br>• Продвижение по уровням происходит по мере набора очков и
        выполнения уроков.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        3. Как я могу следить за своим прогрессом?
      </h2>
      <div className="w-[950px] text-xl">
        • Ваш прогресс отображается на главной странице вашего профиля.<br></br>
        <br></br>• Вы можете видеть, сколько уроков вы завершили и сколько очков
        набрали.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        4. Что делать, если я забыл пароль?
      </h2>
      <div className="w-[950px] text-xl">
        • Перейдите на страницу входа и нажмите «Забыли пароль?».<br></br>
        <br></br>• Следуйте инструкциям для восстановления пароля.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        5. Как связаться с поддержкой?
      </h2>
      <div className=" w-[950px] pb-[30px] text-xl">
        • Если у вас возникли вопросы или проблемы, свяжитесь с нами по
        электронной почте:
        <Link href="kattachi6@gmail.com" className=" ml-[10px] text-blue-500">
          kattachi6@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default ReferencePage;
