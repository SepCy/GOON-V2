import clsx from 'clsx';

export default function Button({
  kind = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'default' | 'error';
}) {
  return (
    <button
      className={clsx(
        'text-sm rounded-md  px-3 py-2 font-medium shadow-lg transition-all duration-200',
        {
          'bg-orange-500 text-zinc-100 hover:-translate-y-1 hover:bg-orange-600 hover:text-white hover:duration-200':
            kind === 'default',
          'bg-red-600 text-red-50 hover:bg-red-500 hover:text-white':
            kind === 'error',
        },
      )}
      {...props}
    />
  );
}
