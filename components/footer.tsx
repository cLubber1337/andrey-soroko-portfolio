export const Footer = () => {
  return (
    <footer className="p-4 py-6 bg-neutral-300 text-slate-600 ">
      <small className="flex items-center text-sm justify-center gap-1">
        <span className="text-lg">©</span> {new Date().getFullYear()} Все права защищены.
      </small>
      <p className="mt-2 text-center text-sm leading-relaxed">
        <span className="font-bold">О сайте: </span> создан при помощи Next.js (App router),
        TypeScript, Tailwind CSS, Framer Motion, Resent и React Email.
      </p>
    </footer>
  )
}
