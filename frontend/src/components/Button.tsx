import clsx from 'clsx';

export default function Button({
  kind = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'default' | 'error';
}) {
  return (
    <button
      className={clsx('text-sm  rounded-md px-3 py-2 font-medium', {
        'bg-orange-500 text-zinc-100 hover:bg-orange-600 hover:text-white':
          kind === 'default',
        'bg-red-600 text-red-50 hover:bg-red-500 hover:text-white':
          kind === 'error',
      })}
      {...props}
    />
  );
}
