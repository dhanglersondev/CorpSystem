import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Form from '../../components/Form/Form'
import FormField from '../../components/Form/FormField'
import Input from '../../components/Form/Input'
import Button from '../../components/Button/Button'

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // Função para lidar com o submit do formulário
  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Aqui poderia validar login e senha se desejar, mas por hora simplesmente redireciona.
    navigate('/dashboard')
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-branco)] px-4 py-10">

      {/* Forma superior esquerda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-40
          h-80
          w-[520px]
          rounded-br-[100%]
          bg-[var(--color-verde-secundario)]
          opacity-90
        "
      />

      {/* Forma inferior */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-20
          h-40
          w-[70%]
          rounded-[50%]
          bg-[var(--color-verde-principal)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          right-[-10%]
          h-48
          w-[70%]
          rounded-[50%]
          bg-[var(--color-verde-claro)]
        "
      />

      {/* Conteúdo principal */}
      <section
        className="
          relative
          z-10
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          gap-10
          lg:flex-row
          lg:gap-0
        "
      >

        {/* Identidade */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center
            lg:w-1/2
            lg:border-r
            lg:border-[var(--color-borda)]/40
            lg:py-16
            lg:text-left
          "
        >
          <div className="flex flex-col items-center lg:items-start">

            <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
              <div className="flex h-16 w-14 sm:h-20 sm:w-16 items-center justify-center flex-shrink-0">
                <div className="relative h-12 w-10 sm:h-16 sm:w-12">
                  <div className="absolute left-0 top-0 h-4 w-10 sm:h-5 sm:w-12 rounded-full border-[6px] border-[var(--color-verde-principal)]" />
                  <div className="absolute left-0 top-3 sm:top-4 h-5 w-5 sm:h-7 sm:w-7 rotate-45 rounded-lg border-[6px] border-[var(--color-verde-secundario)]" />
                  <div className="absolute bottom-0 left-0 h-4 w-10 sm:h-5 sm:w-12 rounded-full border-[6px] border-[var(--color-verde-claro)]" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-3xl sm:text-6xl font-light tracking-[0.12em] text-[var(--color-verde-principal)]">
                  CorpSystem
                </h1>
                <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[var(--color-verde-secundario)] font-medium mt-4">
                  Gerenciamento inteligente
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Apenas com Login e Senha */}
        <div className="w-full max-w-md px-2 lg:w-1/2 lg:px-14">
          {/* Removidos título "Entrar" e o subtítulo "Acesse o CorpSystem" */}
          <Form onSubmit={handleLoginSubmit}>
            <FormField label="Login" htmlFor="login">
              <Input
                id="login"
                type="text"
                placeholder="Digite seu login"
                autoComplete="username"
              />
            </FormField>

            <FormField label="Senha" htmlFor="password">
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(value => !value)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-[var(--color-verde-principal)]/70
                    transition
                    hover:text-[var(--color-verde-secundario)]
                  "
                  aria-label={
                    showPassword
                      ? 'Ocultar senha'
                      : 'Mostrar senha'
                  }
                  tabIndex={-1} // not focusable for tab. Optional.
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </FormField>

            <div className="flex justify-center w-full">
              <Button
                type="submit"
                icon={<UserIcon className="h-5 w-5" />}
                className="w-full lg:w-full"
              >
                Entrar
              </Button>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="
                  text-sm
                  text-[var(--color-verde-secundario)]
                  transition
                  hover:text-[var(--color-verde-principal)]
                  hover:underline
                "
              >
                Esqueci minha senha
              </button>
            </div>
          </Form>
        </div>
      </section>

      {/* Marca inferior */}
      <div
        className="
          absolute
          bottom-6
          right-6
          z-10
          hidden
          items-center
          gap-3
          sm:flex
        "
      >
        <div className="grid grid-cols-2 gap-1">
          <span className="h-3 w-3 bg-[var(--color-verde-secundario)]" />
          <span className="h-3 w-3 bg-[var(--color-verde-principal)]" />
          <span className="h-3 w-3 bg-[var(--color-verde-principal)]" />
          <span className="h-3 w-3 bg-[var(--color-verde-secundario)]" />
        </div>

        <div className="leading-tight">
          <p className="text-sm font-semibold text-[var(--color-verde-principal)]">
            CorpSystem
          </p>

          <p className="text-xs text-[color:rgb(21_128_61)/0.8] text-[var(--color-verde-principal)]/80">
          Gerenciamento inteligente
          </p>
        </div>
      </div>
    </main>
  )
}