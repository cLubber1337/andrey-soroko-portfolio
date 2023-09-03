import { FaPaperPlane } from 'react-icons/fa6'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button
      className="group max-w-max flex items-center gap-2 rounded-full
          bg-slate-800 px-6 py-3 text-white outline-none transition-all tracking-wide
          focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105
          disabled:scale-100 disabled:opacity-60
          "
      type="submit"
      disabled={pending}
    >
      Отправить
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2" />
      ) : (
        <FaPaperPlane
          className="text-md opacity-70 transition-all
          group-hover: translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </button>
  )
}
