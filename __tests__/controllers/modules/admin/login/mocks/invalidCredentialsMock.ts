import { vitest } from 'vitest'

import { AdminLoginRequestDTO } from '@/core/dtos/admin'
import { IUseCase } from '@/useCases/contracts/shared'
import { INVALID_CREDENTIALS_ERROR_MESSAGE } from '@/useCases/modules/admin/login/constants'

export const invalidCredentialsMock = (
  stub: IUseCase<AdminLoginRequestDTO, string>,
) => {
  vitest.spyOn(stub, 'execute').mockResolvedValueOnce({
    data: null,
    error: INVALID_CREDENTIALS_ERROR_MESSAGE,
  })
}
