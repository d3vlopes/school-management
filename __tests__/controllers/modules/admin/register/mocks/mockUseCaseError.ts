import { vitest } from 'vitest'

import { AdminRegisterRequestDTO } from '@/core/dtos/admin'
import { AdminModel } from '@/core/models'
import { IUseCase } from '@/useCases/contracts/shared'

export const mockUseCaseError = (
  stub: IUseCase<AdminRegisterRequestDTO, AdminModel>,
  error: string,
) => {
  vitest.spyOn(stub, 'execute').mockResolvedValueOnce({
    data: null,
    error,
  })
}
