"use client"

import { useMediaQuery } from "@/hooks/use-media-query"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface ReactChildren {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

const ResponsiveModal = ({ children }: ReactChildren) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModal = isDesktop ? Dialog : Drawer

  return <ResponsiveModal>{children}</ResponsiveModal>
}

const ResponsiveModalTrigger = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalTrigger = isDesktop ? DialogTrigger : DrawerTrigger

  return (
    <ResponsiveModalTrigger className={className} {...props}>
      {children}
    </ResponsiveModalTrigger>
  )
}

const ResponsiveModalClose = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalClose = isDesktop ? DialogClose : DrawerClose

  return (
    <ResponsiveModalClose className={className} {...props}>
      {children}
    </ResponsiveModalClose>
  )
}

const ResponsiveModalContent = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalContent = isDesktop ? DialogContent : DrawerContent

  return (
    <ResponsiveModalContent className={className} {...props}>
      {children}
    </ResponsiveModalContent>
  )
}

const ResponsiveModalDescription = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalDescription = isDesktop
    ? DialogDescription
    : DrawerDescription

  return (
    <ResponsiveModalDescription className={className} {...props}>
      {children}
    </ResponsiveModalDescription>
  )
}

const ResponsiveModalHeader = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalHeader = isDesktop ? DialogHeader : DrawerHeader

  return (
    <ResponsiveModalHeader className={className} {...props}>
      {children}
    </ResponsiveModalHeader>
  )
}

const ResponsiveModalTitle = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalTitle = isDesktop ? DialogTitle : DrawerTitle

  return (
    <ResponsiveModalTitle className={className} {...props}>
      {children}
    </ResponsiveModalTitle>
  )
}

const ResponsiveModalFooter = ({
  className,
  children,
  ...props
}: ReactChildren): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ResponsiveModalFooter = isDesktop ? DialogFooter : DrawerFooter

  return (
    <ResponsiveModalFooter className={className} {...props}>
      {children}
    </ResponsiveModalFooter>
  )
}

export {
  ResponsiveModal,
  ResponsiveModalTrigger,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalFooter,
}
